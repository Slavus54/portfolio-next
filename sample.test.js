import {mount} from 'enzyme';
import gql from 'graphql-tag';
import EasyGraphQLTester from 'easygraphql-tester';
import usersGQL from './gql';
import Users from './models/User';

describe('check that users GQL schema has correct fields', () => {
    it('GQL schema', () => {
        expect(usersGQL).toEqual(gql`
        {
            users {
                name
                email
                phone
            }  
        }
        `)
    })
    it('Users collection defined', () => {
        const users = Users.find();
        expect(users).not.toBeNull();
    })
    it('DB is created', () => {
        expect(Users).toBeDefined();
    })
})