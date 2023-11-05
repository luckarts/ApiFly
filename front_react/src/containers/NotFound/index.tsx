import { Helmet } from 'react-helmet';
import { Wrapper_title } from 'src/components';
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Wrapper_title />
      <div className=" my-12 pb-6 ">
        <h1 className="c-h3 text-center">404 !</h1>
        <p className="c-h4 text-center">La page que vous recherchez n'existe pas.</p>
      </div>
    </>
  );
};

export default NotFound;
