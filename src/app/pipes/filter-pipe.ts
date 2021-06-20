import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(list: any[], filteredByField: string, filterValue: any): any {
        if (!filteredByField || !filterValue) {
            return list
        }
        return list.filter(item => {
            const field = item[filteredByField].toLowerCase();
            const filter = filterValue.toLocaleLowerCase();
            return field.indexOf(filter) >= 0;
        })
    }

}