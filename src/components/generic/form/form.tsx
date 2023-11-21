import { ComponentProps, FC } from 'react';
import { useForm } from './use-form';

type UseFormReturnType = ReturnType<typeof useForm>;
type Props = ComponentProps<UseFormReturnType['Form']>;

export const Form: FC<Props> = props => {
  const { Form: FormComponent } = useForm(props.options);
  return <FormComponent {...props} />;
};
