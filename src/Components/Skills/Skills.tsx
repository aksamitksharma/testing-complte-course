import { SkillsProps } from "./Skills.type"

export const Skills = (props: SkillsProps) => {
    const {skills} = props
    return (
        <>
            <ul>
                {skills.map((skills) => {
                    return <li key={skills}>{skills}</li>
                })}
            </ul>
        </>
    )
}