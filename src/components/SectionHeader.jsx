function SectionHeader({
  title,
  subtitle,
  action
}) {
  return (
    <header>
      <div>
        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>

      {action}
    </header>
  );
}

export default SectionHeader;