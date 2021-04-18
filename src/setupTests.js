import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

