type ContactInputBoxProps = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const ContactInputBox = ({ type, placeholder, name, value, onChange }: ContactInputBoxProps) => {
  return (
    <>
      <div className="mb-6">
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-gray-700 px-[14px] py-3 text-base text-body-color outline-none focus:border-gray-300  bg-transparent"
        />
      </div>
    </>
  );
};

export default ContactInputBox;