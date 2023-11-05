import parse from 'html-react-parser';
import { Button } from 'src/components';
import { useAdmin } from 'src/contexts';
interface CardProjectsProps {
  keyID: number;
  title?: string;
  img?: string;
  techno?: string;
  description?: string;
  linkCode?: string;
  linkWebsite?: string;
  id: any;
}
const CardProject = ({ keyID, title, img, techno, description, linkCode, linkWebsite, id }: CardProjectsProps) => {
  const { isAdmin } = useAdmin();

  return (
    <div className={`mb-6 ${keyID % 2 === 0 ? 'md:pr-4' : ''} `}>
      <div className="border border-gray-400 bg-white rounded-xlg shadow hover:shadow-md ">
        <a className="cursor-pointer " href={linkWebsite}>
          <div className="overflow-hidden relative rounded-t-xlg ">
            <div
              className="bg-cover bg-center w-full  transition duration-500 ease-in-out hover:scale-110"
              style={{ backgroundImage: 'url(' + img + ')', height: '250px' }}
            ></div>
          </div>
        </a>
        <div className="p-4 md:h-72 xl:h-64 flex justify-between flex-col">
          <h3 className=" py-2 text-primary">{title}</h3>
          {description && <p className=" text-gray-700">{parse(description)}</p>}
          <p className="mb-4 py-2 text-gray-800">
            Techno: <span className="font-bold">{techno}</span>
          </p>
          <div>
            {linkCode && (
              <Button
                variante="link"
                external={linkCode}
                className={`button text-secondary small rounded border-2 border-secondary`}
              >
                <span> Code</span>
              </Button>
            )}
            {linkWebsite && (
              <Button
                variante="link"
                className={`button text-secondary small rounded border-2 border-secondary ${linkCode && 'ml-4'}`}
                external={linkWebsite}
              >
                <span>Demo</span>
              </Button>
            )}

            {isAdmin && (
              <Button
                className={`addIcon button text-secondary small rounded border-2 border-secondary ${
                  linkCode && 'ml-4'
                }`}
                variante="link"
                params={{ id }}
                href={'/edit/project'}
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
