describe('API Testing for Reqres Users', () => {
    it('should fetch users from page 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2', // API endpoint
        }).then((response) => {
            // Assertions
            expect(response.status).to.eq(200); // Assert status code
            expect(response.body).to.have.property('page', 2); // Assert page number
            expect(response.body.data).to.be.an('array').that.is.not.empty; // Assert data is an array and not empty
            
            // Additional assertion: Check structure of first user
            expect(response.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
            expect(response.body.data[0].email).to.include('@reqres.in'); // Verify email domain
        });
    });
});
