import styles from "./AuthForm.module.css";

function AuthForm({

  title,

  subtitle,

  onSubmit,

  children,

  footer

}) {

  return (

    <div className={styles.page}>

      <div className={styles.card}>

        <div className={styles.header}>

          <h1 className={styles.logo}>
            ShopSphere
          </h1>

          <h2 className={styles.title}>
            {title}
          </h2>

          {subtitle && (

            <p className={styles.subtitle}>
              {subtitle}
            </p>

          )}

        </div>

        <form
          className={styles.form}
          onSubmit={onSubmit}
        >

          {children}

        </form>

        {footer && (

          <div className={styles.footer}>
            {footer}
          </div>

        )}

      </div>

    </div>

  );

}

export default AuthForm;