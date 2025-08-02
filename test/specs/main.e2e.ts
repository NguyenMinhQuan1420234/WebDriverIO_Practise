describe('Main E2E Tests', () => {
    it('verify item list', async () => {
        // Your test code here
        browser.url('/');
        const listItems = await $$('ul li');

        // For more type of assertion, read wdio documentation
        expect(listItems.length).toBeElementsArrayOfSize({gte: 1});
        expect(listItems.length).toBeElementsArrayOfSize(44);
    });
})

function waitForPageToLoad() {
    // Wait for document ready state to be complete
    return browser.waitUntil(
        async () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 5000, // 5 seconds
            timeoutMsg: 'Page did not finish loading within 5 seconds'
        }
    );
}
