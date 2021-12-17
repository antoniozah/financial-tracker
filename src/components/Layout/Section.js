const Section = (props) => {
  const classes = 'section ' +props.className;

  return (
    <section className={classes}>
      {props.children}
    </section>
  )
}

export default Section;
