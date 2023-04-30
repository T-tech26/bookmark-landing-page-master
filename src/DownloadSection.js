import DownloadCards from "./DownloadCards";

const DownloadSection = () => {
  return (
    <section
      className=" w-full h-auto mb-20"
    >
      <div
        className=" w-4/5 h-auto text-center mx-auto sm:w-[22rem] md:w-[30rem] mb-10"
      >
        <h2
          className=" text-2xl font-[500] text-Very-Dark-Blue mb-5 md:text-3xl"
        >
          Download the extension
        </h2>

        <p
          className="text-Grayish-Blue text-sm mb-5 md:text-base"
        >
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div
        className=" w-full mx-auto h-auto grid grid-row-3 place-content-center gap-5 md:w-[47rem] md:grid-flow-col md:grid-cols-3 md:gap-5 md:place-content-around md:place-items-center"
      >
        <DownloadCards />
      </div>
    </section>
  )
}

export default DownloadSection;