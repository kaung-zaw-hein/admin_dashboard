import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Resize, Sort, Filter, Search, Page, Toolbar, Edit } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Search'];

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m10 md:p-10 rounded-3xl">
      <Header category="Page"  title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        contextMenuItems={contextMenuItems}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Search, Filter, Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Employees