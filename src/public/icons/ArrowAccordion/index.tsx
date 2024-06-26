export function ArrowAccordion({accordionOpen, primaryColor}: {accordionOpen: boolean; primaryColor: string;}) {
  return (
    <svg className={`${accordionOpen ? '' : '!rotate-180'}`} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.41414 16C5.02361 16.3905 4.39045 16.3905 3.99992 16C3.6094 15.6095 3.6094 14.9763 3.99993 14.5858L11.2928 7.29289C11.6833 6.90237 12.3165 6.90237 12.707 7.29289L19.9999 14.5858C20.3904 14.9763 20.3904 15.6095 19.9999 16C19.6094 16.3905 18.9762 16.3905 18.5857 16L12.707 10.1213C12.3165 9.7308 11.6833 9.7308 11.2928 10.1213L5.41414 16Z'
            fill={primaryColor}
          />
        </svg>
  )
}