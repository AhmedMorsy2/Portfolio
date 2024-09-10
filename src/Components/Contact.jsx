const Contact = () => {
  return (
    <div className=" text-center">
      <footer className="border-top  p-3">
        <p>© {new Date().getFullYear()} Ahmed Morsy. All Rights Reserved.</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/AhmedMorsy2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/ahmed-morsy-8a46b3295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          |
          <a href="mailto:ahmedaboalgoud2@gmail.com" rel="noopener noreferrer">
            mail
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
