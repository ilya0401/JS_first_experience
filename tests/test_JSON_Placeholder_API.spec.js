const { test, expect } = require('@playwright/test');
const JsonPlaceholderAPI = require('../utils/JSON_Placeholder_API'); // Исправленный путь

// Пример конфигурации
const loadConfig = {
    url: 'https://jsonplaceholder.typicode.com'
};

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
