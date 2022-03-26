import { PeopleReducer } from 'redux/people/types';

interface PeopleState {
  people: PeopleReducer;
}

export const selectPeopleData = (state: PeopleState) => state.people.peopleData.data;
export const selectPeopleLoader = (state: PeopleState) => state.people.peopleData.loading;

export const selectPeopleItemData = (state: PeopleState) => state.people.peopleItemData.data;
export const selectPeopleItemLoader = (state: PeopleState) => state.people.peopleItemData.loading;
