import { gql } from '@apollo/client';


export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $firstName: String!, $lastName: String!, $jobTitle: String!, $email: String!, $password: String!) {
    addProfile(name: $name, firstName: $firstName, lastName: $lastName, jobTitle: $jobTitle, email: $email, password: $password) {
      token
      profile {
        _id
        name
        firstName
        lastName
        jobTitle
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;


export const UPDATE_TRIP = gql`
  mutation UpdateTrip($tripId: ID!, $firstName: String, $lastName: String, $fromDateTime: String, $toDateTime: String, $managerName: String, $approved: Boolean, $path: [ID]) {
    updateTrip(tripId: $tripId, firstName: $firstName, lastName: $lastName, fromDateTime: $fromDateTime, toDateTime: $toDateTime, managerName: $managerName, approved: $approved, path: $path) {
      _id
      firstName
      lastName
      fromDateTime
      toDateTime
      managerName
      approved
      path {
        _id
        name
        lon
        lat
      }
    }
  }
`;


export const REMOVE_TRIP = gql`
  mutation RemoveTrip($tripId: ID!) {
    removeTrip(tripId: $tripId) {
      _id
      firstName
    }
  }
`;



export const ADD_TRIP = gql`
  mutation AddTrip($firstName: String!, $lastName: String!, $fromDateTime: String!, $toDateTime: String!, $managerName: String!, $approved: Boolean!, $path: [ID]!) {
    addTrip(firstName: $firstName, lastName: $lastName, fromDateTime: $fromDateTime, toDateTime: $toDateTime, managerName: $managerName, approved: $approved, path: $path) {
      _id
      firstName
      lastName
      fromDateTime
      toDateTime
      managerName
      approved
    }
  }
`;



