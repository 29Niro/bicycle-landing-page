import PropTypes from 'prop-types';

export default function TestimonialCard({ activeIndex, index, property = {} }) {
  const getFirstAndLastName = (fullName = 'Customer') => {
    const [firstName, lastName] = fullName.split(' ');
    return { firstName: firstName || 'Customer', lastName: lastName || '' };
  };

  const { firstName, lastName } = getFirstAndLastName(property.name);
  const email = property.email || 'No email provided';
  const review = property.review || 'No review available';
  const placeholderImageUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=f1a6a6&color=fff&size=128`;

  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-secondary4 border rounded-lg w-96 ${
          activeIndex === index
            ? 'border-2 border-secondary1 rounded-xl'
            : 'border-2 border-secondary3'
        } p-6`}
      >
        <div className="flex justify-center -mt-12">
          <img
            className="w-24 h-24 object-cover rounded-full border-2 border-secondary1"
            src={placeholderImageUrl}
            alt={`${firstName} ${lastName} profile`}
          />
        </div>

        <div className="text-center mt-2">
          <h2 className="text-xl font-bold text-secondary1">
            {firstName} {lastName}
          </h2>
          <p className="text-sm text-secondary8">{email}</p>
        </div>

        <div className="bg-secondary1 h-36 text-gray-400 font-heading1 rounded-lg mt-4 p-4 text-center">
          <p className="text-sm">{review}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  property: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    review: PropTypes.string,
  }),
};
