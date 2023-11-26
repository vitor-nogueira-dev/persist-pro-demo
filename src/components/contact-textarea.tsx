type ContactTextAreaProps = {
  rows: string;
  placeholder: string;
  name: string;
  defaultValue: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
};

const ContactTextArea = ({ rows, placeholder, name, defaultValue, value, onChange }: ContactTextAreaProps) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          value={value}
          onChange={onChange}
          rows={+rows}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded  px-[14px] py-3 text-base text-body-color outline-none focus:border-gray-300 bg-transparent border border-gray-700 "
        />
      </div>
    </>
  );
};

export default ContactTextArea;