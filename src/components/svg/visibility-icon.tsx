import { FC } from 'react';

export const VisibilityIcon: FC<{ className?: string; on?: boolean }> = ({ className, on }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    {on ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18C8.08323 18 4.74752 15.4964 3.51201 12C4.74752 8.50359 8.08323 6 12 6C15.9177 6 19.2525 8.50354 20.488 12C19.2525 15.4965 15.9177 18 12 18ZM12 4C7.07378 4 2.90509 7.23851 1.50394 11.7004C1.4427 11.8954 1.4427 12.1046 1.50394 12.2996C2.90509 16.7615 7.07378 20 12 20C16.9273 20 21.0949 16.7614 22.4961 12.2996C22.5573 12.1046 22.5573 11.8954 22.4961 11.7004C21.0949 7.23856 16.9273 4 12 4ZM10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29292 2.29289C2.68345 1.90237 3.31661 1.90237 3.70714 2.29289L6.74813 5.33389C8.35578 4.45837 10.1615 3.99763 12.0007 4C16.9277 4.0003 21.0949 7.23878 22.497 11.7002C22.5585 11.8958 22.5584 12.1055 22.4967 12.301C21.8462 14.362 20.6074 16.1775 18.9454 17.5311L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.7058 18.1199L16.705 18.1192L13.414 14.8292L9.17101 10.5862C9.16202 10.5772 9.15316 10.568 9.14459 10.5588L2.29292 3.70711C1.9024 3.31658 1.9024 2.68342 2.29292 2.29289ZM8.23715 6.82291L9.96846 8.55422C10.5787 8.19458 11.2791 8.00025 11.9995 8.00025C13.0605 8.00025 14.0779 8.4217 14.8281 9.17189C15.5783 9.92209 15.9998 10.9396 15.9998 12.0005C15.9998 12.7209 15.8055 13.4213 15.4458 14.0316L17.5221 16.1079C18.8804 15.052 19.9115 13.6271 20.4888 11.9994C19.2522 8.50317 15.9174 6 12 6L11.9987 6C10.695 5.99824 9.41194 6.28113 8.23715 6.82291ZM13.9318 12.5176C13.9766 12.3503 13.9998 12.1766 13.9998 12.0005C13.9998 11.47 13.789 10.9612 13.4139 10.5861C13.0388 10.211 12.53 10.0002 11.9995 10.0002C11.8234 10.0002 11.6497 10.0235 11.4825 10.0682L13.9318 12.5176ZM4.62375 8.1738C5.06403 8.50723 5.15065 9.13444 4.81723 9.57472C4.2592 10.3116 3.81881 11.1298 3.51112 12C4.74755 15.4966 8.08246 18 12 18C12.5665 18.0004 13.1326 17.9477 13.6892 17.8424C14.2319 17.7398 14.755 18.0965 14.8576 18.6392C14.9602 19.1819 14.6035 19.705 14.0608 19.8076C13.3812 19.9361 12.691 20.0005 11.9993 20C7.07227 19.9997 2.90512 16.7612 1.50303 12.2998C1.44169 12.1046 1.4417 11.8953 1.50306 11.7001C1.88076 10.4987 2.46252 9.37127 3.22283 8.36728C3.55626 7.927 4.18347 7.84038 4.62375 8.1738Z"
      />
    )}
  </svg>
);
