describe('API Tests for ReqRes', () => {
    it('GET user with ID 2', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
            .then((response) => {
                // Assert the response status code
                expect(response.status).to.equal(200);

                // Assert the response body is JSON
                expect(response.headers['content-type']).to.include('application/json');

                // Assert the user data
                expect(response.body).to.have.property('data');
                expect(response.body.data).to.have.property('id', 2);
                expect(response.body.data).to.have.property('email').and.to.include('@reqres.in');
                expect(response.body.data).to.have.property('first_name');
                expect(response.body.data).to.have.property('last_name');
                expect(response.body.data).to.have.property('avatar');
            });
    });
});
