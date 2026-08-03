import Section from "../../../components/Section";
import SectionHeader from "../../../components/SectionHeader";

import useCategories from "../../products/hooks/useCategories";


function Categories() {

  const {
    categories,
    loading,
    error
  } = useCategories();


  if (loading) {
    return (
      <Section>
        <p>
          Loading categories...
        </p>
      </Section>
    );
  }


  if (error) {
    return (
      <Section>
        <p>
          {error}
        </p>
      </Section>
    );
  }


  return (

    <Section>

      <SectionHeader
        title="Categories"
        subtitle="Browse products by category"
      />


      <div>

        {
          categories.map((category)=>(
            
            <button key={category}>
              {category}
            </button>

          ))
        }

      </div>


    </Section>

  );

}


export default Categories;