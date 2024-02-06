import React, { Children } from 'react'

const SectionLayout = (props) => {
  return (
    <>
    <section id={props.Sec_id}>
        <div className={props.Sec_class}>
            <div className="container">
                <div className="row">
                        {Children}
                </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default SectionLayout