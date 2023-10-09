const { COMPANY_NAME, SITE_NAME } = process.env;
export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <div className="mx-auto flex h-8 w-full flex-row items-center justify-end">
      <p>
        &copy; {copyrightDate} {copyrightName}
        {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
      </p>
    </div>
  );
};
