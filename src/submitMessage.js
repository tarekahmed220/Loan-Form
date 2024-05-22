import "./loanForm.css";
export default function SubmitMessage({
  showModel,
  setShowModel,
  setErrorMessage,
  errorMessage,
}) {
  if (showModel) {
    return (
      <div
        className="overlay"
        onClick={() => {
          setShowModel(false);
          setErrorMessage(null);
        }}
      >
        <div className="model-content">
          {errorMessage === null ? (
            <h1>The Form Has Been Submitted Successfully</h1>
          ) : (
            <h1 style={{ color: "red" }}>{errorMessage}</h1>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
