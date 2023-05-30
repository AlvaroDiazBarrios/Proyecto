import { PropTypes } from 'prop-types'
import { Fieldset } from 'primereact/fieldset'
import { Skill } from './Skill'

export const SkillsList = ({ skills, edit, setSkills }) => {

    return (
        <Fieldset legend="Skills">
            <div className="flex mt-2 md:flex-row flex-column row-gap-3"   >
                <Skill name='accounting' value={skills.accounting} setSkills={setSkills} edit={edit} />
                <Skill name='charm' value={skills.charm} setSkills={setSkills} edit={edit} />
                <Skill name='driveAuto' value={skills.driveAuto} setSkills={setSkills} edit={edit} />
            </div>
            <div className="flex mt-2 md:flex-row flex-column row-gap-3 mt-3"   >
                <Skill name='brawl' value={skills.brawl} setSkills={setSkills} edit={edit} />
                <Skill name='libraryUse' value={skills.libraryUse} setSkills={setSkills} edit={edit} />
                <Skill name='occult' value={skills.occult} setSkills={setSkills} edit={edit} />
            </div>
            <div className="flex mt-2 md:flex-row flex-column row-gap-3 mt-3"   >
                <Skill name='persuade' value={skills.persuade} setSkills={setSkills} edit={edit} />
                <Skill name='psychology' value={skills.psychology} setSkills={setSkills} edit={edit} />
                <Skill name='cthulhuMythos' value={skills.cthulhuMythos} setSkills={setSkills} edit={edit} />
            </div>
        </Fieldset>
    )
}

SkillsList.protoTypes = {
    skills: PropTypes.any,
    edit: PropTypes.bool,
    setSkills: PropTypes.func
}