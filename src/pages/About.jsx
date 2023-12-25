const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat
        officia quaerat aliquid fugit harum, blanditiis ea consequuntur,
        adipisci ducimus nam repellat ipsam ipsa iure enim. Fuga earum odit,
        voluptatum omnis totam ex facere tempore quas rem veritatis optio
        molestiae.
      </p>
    </>
  );
};

export default About;
