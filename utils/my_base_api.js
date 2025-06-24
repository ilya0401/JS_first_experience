const { request } = require('playwright');
const { URL } = require('url');
const {test, expect} = require("@playwright/test");
const JsonPlaceholderAPI = require("./JSON_Placeholder_API");

class BaseApi {
    constructor(url) {
        this.baseUrl = url;
    }

    async get(endpoint = '', params = {}) {
        const fullUrl = new URL(endpoint, this.baseUrl).href;
        const response = await request.get(fullUrl, { params });
        return response;
    }
}


const loadConfig = {
    url: 'https://jsonplaceholder.typicode.com'
};


class JsonPlaceholderAPI extends BaseApi {
    constructor(url) {
        super(url);
    }

    async get_posts() {
        const POSTS_PARAM = 'posts';
        const response = await this.get(POSTS_PARAM);
        const posts = await response.json(); // Парсим JSON-ответ
        return posts; // Возвращаем массив постов
    }
}


// Тестовый метод
test.describe('TestJsonPlaceholder', () => {
    test('test_post_and_user_data', async () => {
        const jsonPlaceholderApi = new JsonPlaceholderAPI(loadConfig.url);

        // 1 шаг
        const response = await jsonPlaceholderApi.get_posts();

        // // Проверяем статус ответа
        expect(response).toBeTruthy(); // Проверяем, что ответ не пустой
        // expect(response.length).toBeGreaterThan(0); // Проверяем, что есть посты
        //
        // // Проверяем, что все посты имеют id и они отсортированы
        // const sortedPosts = [...response].sort((a, b) => a.id - b.id);
        // expect(response).toEqual(sortedPosts); // Проверяем, что посты отсортированы по id
    });
});
