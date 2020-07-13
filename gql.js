import gql from 'graphql-tag';

export default gql`
{
    users {
        name
        email
        phone
    }  
}
`;