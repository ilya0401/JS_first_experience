const {test, expect} = require('@playwright/test');

test('Проверяю успешный статус код', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts')
    expect(response.status()).toBe(200); 
});

test('Проверяю что атрибут Content-type в Headers содержит JSON', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    const headers = response.headers();
    expect(headers['content-type']).toBe('application/json; charset=utf-8');
});

test('Проверяю, что посты отсортированы по id по возрастанию', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts'); 
  
    const posts = await response.json();
    for (let i = 0; i < posts.length - 1; i++) {
      expect(posts[i].id).toBeLessThanOrEqual(posts[i + 1].id);
    }
});