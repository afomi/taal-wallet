import { FC } from 'react';

export const ShieldCheckIcon: FC<{ className?: string }> = ({ className, ...rest }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.33216 1.20003C9.71213 0.859105 10.2879 0.859105 10.6678 1.20003C12.8274 3.13776 15.6676 4.13961 18.565 3.98574C19.0401 3.96051 19.4672 4.27356 19.5862 4.73425C19.856 5.77884 20 6.87284 20 8.00034C20 14.0596 15.8564 19.1478 10.2492 20.5908C10.0857 20.6329 9.91427 20.6329 9.75078 20.5908C4.14358 19.1478 3.6624e-06 14.0586 3.6624e-06 8.00034C-0.000822756 6.89851 0.138215 5.80104 0.413784 4.73423C0.532784 4.27355 0.959901 3.96051 1.43503 3.98574C4.33245 4.13961 7.17256 3.13776 9.33216 1.20003ZM2.18125 6.00013C2.06022 6.65915 1.99946 7.32839 2 7.99952C2 13.0331 5.38222 17.281 10 18.5866C14.6178 17.281 18 13.0349 18 8.00034C18 7.31654 17.9376 6.64833 17.8187 6.00013C14.9817 5.96403 12.234 4.99693 10 3.24852C7.76597 4.99694 5.01825 5.96405 2.18125 6.00013ZM13.7071 8.29323C14.0976 8.68375 14.0976 9.31692 13.7071 9.70744L9.70711 13.7074C9.31659 14.098 8.68342 14.098 8.2929 13.7074L6.2929 11.7074C5.90237 11.3169 5.90237 10.6838 6.2929 10.2932C6.68342 9.9027 7.31659 9.9027 7.70711 10.2932L9 11.5861L12.2929 8.29323C12.6834 7.9027 13.3166 7.9027 13.7071 8.29323Z"
    />
  </svg>
);
