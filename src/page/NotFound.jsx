function NotFound() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1
            className="text-5xl font-bold  text-color-base-100 mt-20"
            style={{ textShadow: "0px 0px 30px #ffff" }}
          >
            Classify{" "}
            <span
              style={{ color: "#37F2B9", textShadow: "0px 0px 30px #37F2B9" }}
            >
              Taekook
            </span>
          </h1>
          <p
            className="py-6"
            style={{ color: "#37F2B9", textShadow: "0px 0px 30px #37F2B9" }}
          >
            404 Not Found
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
