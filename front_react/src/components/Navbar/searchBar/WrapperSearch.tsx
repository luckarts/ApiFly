import { FormProvider } from 'src/contexts';
import { Form } from 'src/components';
import { getCities, getCitiesWithArrivalFlight, getCitiesWithDepartureFlight } from 'utils/api';
import { useStore } from 'src/contexts';
import { SearchProvider } from 'src/contexts/SearchContext';
import { useEffect } from 'react';

export function WrapperSearch() {
  const { getStore, setStore } = useStore();

  // Pass the computed styles into the `__css` prop
  const onFinish = async (values, e?) => {
    if (e) e.preventDefault();
    setStore('search', values);
  };

  const fields = [
    {
      type: 'autocomplete',
      depart: {
        name: 'depart',
        type: 'autocomplete',
        onChange: (e) => {
          console.log('Changement sur le champ username:', e.target.value);
        },
        callback_autocomplete: () => getCitiesWithDepartureFlight(),
        name_autocomplete: 'depart_autocomplete'
      },
      arrive: {
        name: 'arrive',
        type: 'autocomplete',
        onChange: (e) => {
          console.log('Changement sur le champ username:', e.target.value);
        },
        callback_autocomplete: () => getCitiesWithArrivalFlight(),
        name_autocomplete: 'arrivee_autocomplete'
      }
    }
  ];
  return (
    <FormProvider fields={fields} onSubmit={onFinish}>
      <SearchProvider>
        <Form />
      </SearchProvider>
    </FormProvider>
  );
}
