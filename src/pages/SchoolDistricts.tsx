const SchoolDistricts = () => {
  return (
    <section>
        <h1 className="text-center">School Districts</h1>
        <ul>
          <li>
            <a
              className="text-decoration-none link-secondary"
              href="https://www.surreyschools.ca/page/30/find-a-school">
                Map view of schools in Surrey
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none link-secondary"
              href="https://www.sd35.bc.ca/schools/school-map/">
                Langley School Map
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none link-secondary"
              href="https://www.sd42.ca/schools/">
                Maple Ridge Schools
            </a>
          </li>
          <li>
            <hr />
            <a
              className="text-decoration-none link-secondary"
              href="https://media.surreyschools.ca/media/Default/medialib/rental-rates.c7de6978951.pdf">
                Surrey Schools Facility Rentals - Rental Rates (PDF)
            </a>            
          </li>
          <li>
            <a
              className="text-decoration-none link-secondary"
              href="https://surreyschools.ebasefm.com/rentals">
                Surrey Schools Rentals
            </a>
          </li>

        </ul>

    </section>
  );
};
export default SchoolDistricts;
