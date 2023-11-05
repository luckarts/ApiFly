import { Field } from 'src/components';
import { useCustomForm } from 'src/contexts';

const recursiveFields = (defaultValue: any, fields: any[] = []): any => {
  const { handleOnDrop } = useCustomForm();
  // rules={rules.length > 0 ? rules[field.name] : undefined}

  return fields.map((field, id) => {
    if (Array.isArray(field.type) && field.type.length > 0) {
      return recursiveFields(field.type, defaultValue ? defaultValue[field.name] : undefined);
    } else if (Array.isArray(field)) return <div key={id}></div>;
    else if (field.type === 'file') {
      return (
        <div key={id} className="imgPreview">
          <img src={defaultValue.img || ''} alt="profile" />
          <Field type="file" name="img" handleOnDrop={handleOnDrop} />
        </div>
      );
    } else {
      return <Field key={id} {...field} />;
    }
  });
};
export default recursiveFields;
