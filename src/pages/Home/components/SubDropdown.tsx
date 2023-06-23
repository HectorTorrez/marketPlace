interface Props {
  label: string
  status: boolean
}

export const SubDropdown: React.FC = ({ label, status }: Props) => {
  return (
    <section className="flex gap-5 text-sm font-normal">
        <input type="checkbox" name="status" id="" checked={status}/>
        <span>{label}</span>
    </section>
  )
}
