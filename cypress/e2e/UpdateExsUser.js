describe('API Testing with Cypress', () => {
    it('should create a user and verify the response', () => {
        // Define the API endpoint and request body
        const apiUrl = 'https://reqres.in/api/users/2';
        const requestBody = {
            name: 'morpheus',
            job: 'zion resident'
        };

        // Perform the POST request
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: requestBody
        }).then((response) => {
            // Assertions to verify the response
            expect(response.status).to.eq(201); // Check status code
            expect(response.body).to.have.property('name', 'morpheus'); // Verify name
            expect(response.body).to.have.property('job', 'zion resident'); // Verify job
            expect(response.body).to.have.property('id'); // Check if 'id' is present
            expect(response.body).to.have.property('createdAt'); // Check if 'createdAt' is present
        });
    });
});
