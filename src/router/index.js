import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import ProcessesPage from '../pages/ProcessesPage';
import JobsPage from '../pages/JobsPage';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProcessesPage} />
        <Route path="/:id" component={JobsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default RootRouter;
