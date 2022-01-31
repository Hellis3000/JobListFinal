import regeneratorRuntime, { wrap } from "regenerator-runtime";

import * as React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, ShallowWrapper } from "enzyme";
import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import { expect } from "chai";
import sinon from "sinon";
import { act } from "react-dom/test-utils";
import PropTypes from 'prop-types'

import App from "./App";
import { SearchFunction } from "./components/SearchFunction";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Listpart, Container, Button } from "./styles/container.jsx";

configure({ adapter: new Adapter() });


async function withFetch() {
  const res = await fetch('https://jobblisting-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
  const json = await res.json()

  return json
}


describe("App", () => {
  it("- Renders the body", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("- Renders the table", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Listpart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("- Renders the full app", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
}),
  describe("<SearchFunction/>", () => {
    it("find p element", () => {
      const wrapper = shallow(<SearchFunction />);

      expect(wrapper.find("strong"))
    });

    it("find p element", () => {
      const wrapper = shallow(<SearchFunction />);

      expect(wrapper.find(<p></p>));
    });

    it("find Input element", () => {
      const wrapper = shallow(<SearchFunction />);

      expect(
        wrapper.find(
          <input placeholder="search" ></input>
        )
      );
    });

    it("Test button", () => {
      const button = shallow(<SearchFunction />);


      button.find("button").simulate("click");
   
    });

   
 
  })

  describe('Database test', () => {
    test('results', async () => {
      const json = await withFetch()
      expect(Array.isArray(json)).to.equal(true)
      expect(json.length).to.equal(50)
    })

    test('filter results', async () => {
      const json = await withFetch()
      const filter = json.filter(function (item) {
        return item.description.indexOf('Javascript') !== -1;
      });
      expect(Array.isArray(json)).to.equal(true)
      
      expect(filter.length).to.equal(7)
    })
  })
  
    
describe('<SearchFunction /> with other props', () => {
  const initialProps = {
    id: ' ',
    
  };
  const container = shallow(<SearchFunction {...initialProps} />);
    
    it('should set the search criteria value on change event with trim', () => {
      container.find('input[type="search"]').simulate('change', {
        target: {
          value: 'Javascript',
        },
      });
      expect(container.find('input[type="search"]').prop('value')).to.equal(
        'Javascript',
      );
    });

  
  
    

  })



    

   
