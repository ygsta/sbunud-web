export const MemberCard = ({name, year, department}) => (
    <div className="bg-gray-100 flex space-x-6 rounded-md">
      <img className="w-1/6 rounded-md"/>
      <div className="w-5/6 pl-0 p-4">
        <div className="text-xl font-medium">{name}</div>
        <div className="text-md text-gray-700">{`Student at S1 Departement of ${department}`}</div>
        <div className="text-md text-gray-700">{`${year} - Udayana University`}</div>
      </div>
    </div>
);

export const ExCommCard = ({name, year, department, role}) => (
    <div className="bg-gray-100 flex space-x-6 rounded-md">
      <img className="w-1/6 rounded-md"/>
      <div className="w-5/6 pl-0 p-4">
        <div className="text-xl font-medium">{name}</div>
        <div className="text-md mb-1">{`${role}`}</div>
        <div className="text-md text-gray-700">{`Student at S1 Departement of ${department}`}</div>
        <div className="text-md text-gray-700">{`${year} - Udayana University`}</div>
      </div>
    </div>
);

