const FormContainer = () => {
    return (
        <section id="FormContainer">
          <form id="studentForm">
              <div class="input_fields">
                <label for="name">Student Name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div class="input_fields">
                  <label for="program">Program</label>
                  <input type="text" name="program" id="program"/>
              </div>
              <div>
                  <button type="submit">Add Student</button>
              </div>
          </form>
      </section>
    )
}

export default FormContainer;