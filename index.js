const Notification = (props) => {
  const { text, style, logoSrc, logoSizing } = props;
  return (
    <div className={style}>
      <img className={logoSizing} src={logoSrc} />
      <p>{text}</p>
    </div>
  );

  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1>Notifications</h1>
    <div className="btnContainer">
      <Notification
        logoSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
        style="infoStyles"
        logoSizing="logoSizing"
      />
      <Notification
        logoSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
        style="successStyles"
        logoSizing="logoSizing"
      />
      <Notification
        logoSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
        style="warningStyles"
        logoSizing="logoSizing"
      />
      <Notification
        logoSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
        style="dangerStyles"
        logoSizing="logoSizing"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
