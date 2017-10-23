import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import HotTable from 'react-handsontable';
import ReactSlider from 'react-slider';
import FaClose from 'react-icons/lib/fa/close';
import FaGear from 'react-icons/lib/fa/cog';
import _ from 'underscore';

import BooleanSort from './BooleanSort';
import PercentageSort from './PercentageSort';


class TableContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			handsontableData: [{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: false,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 80,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 100,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: false,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 80,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 100,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: false,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.82m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 80,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 100,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 50,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
					col1: 70,
					progress: {
						percentage : 60,
						value : '$1.81m'
					},
					range: 10
				},{
					available: true,
				}
			]
		}
	}
	columns = [
		{
			data: 'available',
			type: 'checkbox',
			renderer: (instance, td, row, col, prop, value, cellProperties) => {
				if(row !== this.state.handsontableData.length - 1) {
					ReactDOM.render(
						<div>
							<label 
								className={classNames({"checkbox__wrapper": true, "checkbox__wrapper--checked": value})} 
								onClick={(e) => (e.target.classList.toggle("checkbox__wrapper--checked"))}>
								<input type="checkbox" defaultChecked={value} />
							</label>
						</div>
					, td);	
				}
				
				return td;
			}
		},
		{
			data: 'col1',
			type: 'numeric',
			editor: false,
			renderer : (instance, td, row, col, prop, value, cellProperties) => {
				if(row === this.state.handsontableData.length - 1) {
					ReactDOM.render(
						<span className="table__footer-cell">{value}</span>
					, td);	
				} else {
					ReactDOM.render(
						<span>{value}</span>
					, td);
				}
				
				return td;
			}
		},
		{
			data: 'progress',
			editor: false,
			renderer: (instance, td, row, col, prop, value, cellProperties) => {
				if(row === this.state.handsontableData.length - 1) {
					if (value) {
						ReactDOM.render(
							<div>
								<div className="col-5-table">{value.val1}</div>
								<div className="col-5-table">{value.val2}</div>
								<div className="col-5-table">{value.val3}</div>
								<div className="col-5-table">{value.val4}</div>
								<div className="col-5-table">{value.val5}</div>
							</div>
						, td);	
					}
				} else {
					ReactDOM.render(
						<div className="progress">
							<div className="progress__inner" style={{width: value ? value.percentage + '%': 0}}>{value ? value.value: null}</div>
						</div>
					, td);	
				}
				
				return td;
			}
		},
		{
			data: 'range',
			editor: false,
			renderer : (instance, td, row, col, prop, value, cellProperties) => {
				if(row === this.state.handsontableData.length - 1) {
					ReactDOM.render(
						<span className="table__footer-cell">Static Summary Rows</span>
					, td);	
				} else {
					ReactDOM.render(
						<div className="slider-wrapper"><ReactSlider defaultValue={[0, 100]} className='horizontal-slider' withBars /></div>
					, td);	
				}
				
				return td;
			}
		}
	];
	
	
	colHeaders =  [
		'Select', 
		'Column 1', 
		'Progress Bar', 
		'<span class="table__header-cell">Range Slider</span><span class="table__header-cell">Static Header Rows</span>'
	];

	sortFunction = (sortOrder, columnMeta) => {
		return (a, b) => {
			var plugin = this.refs.hot.hotInstance.getPlugin('columnSorting');
			var sortFunction;

			if (b[0] === (this.refs.hot.hotInstance.countRows() - 1)) { 
				return -1; 
			}
			
			switch (columnMeta.type) {
				case 'checkbox':
					sortFunction = BooleanSort;
					break;
				case 'numeric':
					sortFunction = plugin.numericSort;
					break;
				default:
					if(columnMeta.col === 2) {
						sortFunction = PercentageSort;	
					} else {
						sortFunction = plugin.defaultSort;	
					}
			}	
	
			return sortFunction(sortOrder, columnMeta)(a, b);
		};
	}
	
	computeWindow = _.throttle((e) => {
		var hot = this.refs.hot.hotInstance,
			rowCount = hot.countRows(),
			rowOffset = hot.rowOffset(),
			visibleRows = hot.countVisibleRows(),
			lastRow = rowOffset + (visibleRows * 1),
			lastVisibleRow = rowOffset + visibleRows + (visibleRows/2),
			threshold = 30;
	    
		    if(lastVisibleRow > (rowCount - threshold)) {
		      this.loadMoreData(rowCount);
		    }
	  }, 200);

	loadMoreData = () => {
		console.log('loadmoredatacalled');
		setTimeout(() => {
			var handsontableData = JSON.parse(JSON.stringify(this.state.handsontableData));
			var lastElement = handsontableData.splice(-1,1);
			var top10Elements = handsontableData.slice(0, 30);
			var newHandsontableData = handsontableData.concat(top10Elements, lastElement);
			
			this.setState({
				handsontableData: newHandsontableData
			});
		},100);
	}


	render() {
		var columnSummary = [
			{
				destinationRow: 0, 
				destinationColumn: 1, 
				reversedRowCoords: true, 
				type: 'sum', 
				forceNumeric: true
			},
			{
				destinationRow: 0, 
				destinationColumn: 2, 
				reversedRowCoords: true, 
				forceNumeric: true,
				type: 'custom', 
				customFunction: function(endpoint) {
					console.log('customFunction');
					return {
						val1 : '$0',
						val2 : '$399.78k',
						val3 : '$799.55k',
						val4 : '$1.20m',
						val5 : '$1.60m'
					}
				}
			}];

		var settings = {
			data: this.state.handsontableData,
			columns: this.columns,
			columnSummary: columnSummary,
			colHeaders: this.colHeaders,
			sortFunction: this.sortFunction,
			rowHeaders: false,
			autoWrapRow: true,
			stretchH: 'all',
			fixedRowsBottom: 1,
			fillHandle: false,
			disableVisualSelection: ['current', 'area'],
			colWidths : [10, 10, 40, 30],
			columnSorting: true,
			sortIndicator: true,
			afterScrollVertically: this.computeWindow,
		}

		return (
			<div className="container">
				<div className="container__header clearfix">
					<div className="container__title">
						My Grid (1000)
					</div>
					<div className="settings">
						<FaGear />
					</div>
					<div className="search">
						<input type="text" className="search__input" placeholder="Search me..." />
						<span className="search__close"><FaClose /></span>
					</div>
					
				</div>
				<div className="container__body">
					<HotTable 
						root="hot" ref="hot"
						settings = {settings}
					/>
				</div>
			</div>
		);
	}
}

export default TableContainer