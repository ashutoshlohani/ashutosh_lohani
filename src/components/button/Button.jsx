// eslint-disable-next-line react/prop-types
function Button({ onClick, label }) {
   return (
      <div
         className='flex justify-center items-center bg-accent-secondary hover:bg-accent-primary text-dark font-medium lg:h-40 lg:w-40 rounded-full px-10 py-4 font-size'
         onClick={onClick}>
         {label}
      </div>
   );
}

export default Button;
