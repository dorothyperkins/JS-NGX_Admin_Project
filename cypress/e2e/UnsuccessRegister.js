describe('User Registration API', () => {
    it('should return error for missing password', () => {
        // Define the request body without the password
        const requestBody = {
            email: "testtest@gmail.com"
        };

        // Make the API call
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: requestBody,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.equal(400); // Expecting Bad Request

            // Assert the response body
            expect(response.body).to.have.property('error', 'Missing password'); // Check for the specific error message
        });
    });
});
