describe('User Registration API Tests', () => {
    it('should register a user successfully', () => {
        // Define the request body
        const requestBody = {
            email: "dorothyperkins420@gmail.com",
            password: "testtest"
        };

        // Send POST request to the registration API
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: requestBody
        }).then((response) => {
            // Assert the status code
            expect(response.status).to.eq(200); // or 201 depending on the API implementation

            // Assert the response body
            expect(response.body).to.have.property('id'); // Check if 'id' property is present
            expect(response.body).to.have.property('token'); // Check if 'token' property is present
        });
    });
});
