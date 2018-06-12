import dataManager from './FakeDataManager';
import React from 'react';
import addresses from './address-list';
import { App } from '/App';

let wrapper = null;

beforeEach(() => {
    wrapper = shallow(
        <Address dataManager={dataManager} addressList={addresses} />
    );
});

it('renders and displays the default first name from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('Patty');
});

it('renders state of firstName after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('Robert');
});

it('renders and displays the default last name from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('Murray');
});

it('renders state of lastName after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('Aderholt');
});

it('renders and displays the default street from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual(
        '154 Russell Senate Office Building'
    );
});

it('renders state of street after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual(
        '235 Cannon House Office Building'
    );
});

it('renders and displays the default city from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('Washington DC');
});

it('renders state of city after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('Washington DC');
});

it('renders and displays the default state from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('WA');
});

it('renders state of state after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('AL');
});

it('renders and displays the default zip from FakeData', () => {
    expect(wrapper.state().address.firstName).toEqual('20510');
});

it('renders state of zip after button click', () => {
    wrapper.instance().setAddress(1);
    expect(wrapper.state().address.firstName).toEqual('20515-0104');
});
