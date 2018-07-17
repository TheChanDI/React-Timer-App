var expect =  requier('expect');
var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = requier('jQurey');


var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDom.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value= '109';
        TestUtils.Simulate.summit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should  not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDom.findDOMNode(countdownForm));
        
        countdownForm.refs.seconds.value= '109b';
        TestUtils.Simulate.summit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});