describe('DELETE User API Tests', () => {
    const userId = 2;
    const deleteUrl = `https://reqres.in/api/users/${userId}`;

    it('should delete a user and return 204 status code', () => {
        cy.request({
            method: 'DELETE',
            url: deleteUrl,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assert the response status code
            expect(response.status).to.eq(204);
            // Optionally check that the response body is empty
            expect(response.body).to.be.empty;
        });
    });
});
