import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// ToDo Delete after React update to 16.0.1
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });