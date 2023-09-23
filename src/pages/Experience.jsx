import experiences from "./data/experiences.json";

export const Experience = () => {
    return (
        <>
            <div class="d-flex flex-column justify-content-around align-items-center">
                <h1 class="display-3">Experience</h1>
                <p class="lead">Over the years, I have had the privelege to work in many different places, which include:</p>
            </div>
            <div class="d-flex flex-column justify-content-around align-items-center">
                {experiences.map((experience => {
                    return (
                        <div class="card w-75 bg-light mt-2">
                            <div class="d-flex flex-row justify-content-between pl-2">
                                <div class="card-body lead">
                                    <h5 class="card-title">
                                        {experience.position}
                                    </h5>
                                    <h6 class="card-title">
                                        {experience.company}
                                    </h6>
                                    <h6>{experience.date}</h6>
                                    <h6>Used: {experience.skills.join(", ")}</h6>
                                </div>
                                <img height={'100%'} width={'15%'} src={experience?.imageLink} alt=""></img>
                            </div>
                            <div class="card-body lead">
                                {<p>{experience.shortDescription}</p>}
                            </div>
                        </div>
                    );
                }))}
            </div>
        </>
    );
}