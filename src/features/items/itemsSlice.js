import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, updateDoc, doc, arrayUnion, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { store, storage } from '../../config/firebase';

const initialState = {
	getItemStatus: 'idle',
	deleteStoreStatus: 'idle',
	addStoreStatus: 'idle',
	cancelStatus: 'idle',
	editStatus: 'idle',
	updateLandingStatus: 'idle',
	uploadPreviewStatus: 'idle',
	addStatus: 'idle',
	status: 'idle',
	storeStatus: 'idle',
	getLandingStatus: 'dle',
	error: null,
	landing: {},
	items: [],
	item: {},
	store: []
};
const storeRef = collection( store, 'store' );
const landingRef = collection( store, 'landing' );
const collectionRef = collection( store, 'products' );
const utiltiesCollectionRef = collection( store, 'utilties' );

export const getItem = createAsyncThunk( 'items/getItem', async ( { id } ) =>
{
	try
	{
		const docRef = doc( store, 'products', id );
		const docSnapshot = await getDoc( docRef );
		const docData = { ...docSnapshot.data(), id: docSnapshot.id };
		return docData;
	} catch ( error )
	{
		return error;
	}
} )

export const addStoreSection = createAsyncThunk( 'items/addStoreSection', async ( { title, cards } ) =>
{
	try
	{
		const docSnapshot = await addDoc( storeRef, {
			cards: {
				firstCard: doc( store, 'products', cards.firstCard ),
				secondCard: doc( store, 'products', cards.secondCard ),
				thirdCard: doc( store, 'products', cards.thirdCard )
			},
			title: title
		} );
		console.log( docSnapshot.id );
	} catch ( error )
	{
		return error;
	}
} );

export const deleteStoreSection = createAsyncThunk( 'items/deleteStoreSection', async ( { id } ) =>
{
	try
	{
		await deleteDoc( doc( storeRef, id ) );
	} catch ( error )
	{
		return error;
	}
} )

export const updateLandingInvertTextColor = createAsyncThunk( 'items/updateLandingInvertTextColor', async ( { group, item, side } ) =>
{
	try
	{
		const landingId = '82sFwktnLRayQ6ZUazXh';
		if ( group === 'banners' )
		{
			if ( item === 'firstBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				const bannerId = docSnapshot.data().banners.firstBanner.id;
				const bannerDocRef = doc( store, 'products', bannerId );
				const bannerInvertStatusSnapshot = await getDoc( bannerDocRef );
				const bannerInvertStatus = bannerInvertStatusSnapshot.data().invertText;
				await updateDoc( doc( collectionRef, bannerId ), {
					invertText: bannerInvertStatus === true ? false : true
				} );
			} else if ( item === 'secondBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				const bannerId = docSnapshot.data().banners.secondBanner.id;
				const bannerDocRef = doc( store, 'products', bannerId );
				const bannerInvertStatusSnapshot = await getDoc( bannerDocRef );
				const bannerInvertStatus = bannerInvertStatusSnapshot.data().invertText;
				await updateDoc( doc( collectionRef, bannerId ), {
					invertText: bannerInvertStatus === true ? false : true
				} );
			} else if ( item === 'thirdBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				const bannerId = docSnapshot.data().banners.thirdBanner.id;
				const bannerDocRef = doc( store, 'products', bannerId );
				const bannerInvertStatusSnapshot = await getDoc( bannerDocRef );
				const bannerInvertStatus = bannerInvertStatusSnapshot.data().invertText;
				await updateDoc( doc( collectionRef, bannerId ), {
					invertText: bannerInvertStatus === true ? false : true
				} );
			}
		} else if ( group === 'blocks' )
		{
			if ( item === 'firstSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.firstSection.leftBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
				if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.firstSection.rightBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
			}
			if ( item === 'secondSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.secondSection.leftBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
				if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.secondSection.rightBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
			}
			if ( item === 'thirdSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.thirdSection.leftBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
				if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					const blockId = docSnapshot.data().blocks.thirdSection.rightBlock.id;
					const blockDocRef = doc( store, 'products', blockId );
					const blockInvertStatusSnapshot = await getDoc( blockDocRef );
					const blockInvertStatus = blockInvertStatusSnapshot.data().invertText;
					await updateDoc( doc( collectionRef, blockId ), {
						invertText: blockInvertStatus === true ? false : true
					} );
				}
			}
		}

	} catch ( error )
	{
		return error;
	}
} )

export const updateLanding = createAsyncThunk( 'items/updateLanding', async ( { group, item, side, id } ) =>
{
	try
	{
		const landingId = '82sFwktnLRayQ6ZUazXh';
		if ( group === 'banners' )
		{
			if ( item === 'firstBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				await updateDoc( doc( landingRef, landingId ), {
					banners: {
						firstBanner: doc( store, `products/${ id }` ),
						secondBanner: docSnapshot.data().banners.secondBanner,
						thirdBanner: docSnapshot.data().banners.thirdBanner
					}
				} );
			} else if ( item === 'secondBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				await updateDoc( doc( landingRef, landingId ), {
					banners: {
						firstBanner: docSnapshot.data().banners.firstBanner,
						secondBanner: doc( store, `products/${ id }` ),
						thirdBanner: docSnapshot.data().banners.thirdBanner
					}
				} );
			} else if ( item === 'thirdBanner' )
			{
				const docRef = doc( landingRef, landingId );
				const docSnapshot = await getDoc( docRef );
				await updateDoc( doc( landingRef, landingId ), {
					banners: {
						firstBanner: docSnapshot.data().banners.firstBanner,
						secondBanner: docSnapshot.data().banners.secondBanner,
						thirdBanner: doc( store, `products/${ id }` )
					}
				} );
			}
		} else if ( group === 'blocks' )
		{
			if ( item === 'firstSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: doc( store, `products/${ id }` ),
								rightBlock: docSnapshot.data().blocks.firstSection.rightBlock
							},
							secondSection: {
								leftBlock: docSnapshot.data().blocks.secondSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.secondSection.rightBlock,
							},
							thirdSection: {
								leftBlock: docSnapshot.data().blocks.thirdSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.thirdSection.rightBlock,
							}
						}
					} );
				} else if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: docSnapshot.data().blocks.firstSection.leftBlock,
								rightBlock: doc( store, `products/${ id }` )
							},
							secondSection: {
								leftBlock: docSnapshot.data().blocks.secondSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.secondSection.rightBlock,
							},
							thirdSection: {
								leftBlock: docSnapshot.data().blocks.thirdSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.thirdSection.rightBlock,
							}
						}
					} );
				}
			} else if ( item === 'secondSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: docSnapshot.data().blocks.firstSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.firstSection.rightBlock,
							},
							secondSection: {
								leftBlock: doc( store, `products/${ id }` ),
								rightBlock: docSnapshot.data().blocks.secondSection.rightBlock
							},
							thirdSection: {
								leftBlock: docSnapshot.data().blocks.thirdSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.thirdSection.rightBlock,
							}
						}
					} );
				} else if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: docSnapshot.data().blocks.firstSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.firstSection.rightBlock,
							},
							secondSection: {
								leftBlock: docSnapshot.data().blocks.secondSection.leftBlock,
								rightBlock: doc( store, `products/${ id }` )
							},
							thirdSection: {
								leftBlock: docSnapshot.data().blocks.thirdSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.thirdSection.rightBlock,
							}
						}
					} );
				}
			} else if ( item === 'thirdSection' )
			{
				if ( side === 'leftBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: docSnapshot.data().blocks.firstSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.firstSection.rightBlock,
							},
							secondSection: {
								leftBlock: docSnapshot.data().blocks.secondSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.secondSection.rightBlock,
							},
							thirdSection: {
								leftBlock: doc( store, `products/${ id }` ),
								rightBlock: docSnapshot.data().blocks.thirdSection.rightBlock
							}
						}
					} );
				} else if ( side === 'rightBlock' )
				{
					const docRef = doc( landingRef, landingId );
					const docSnapshot = await getDoc( docRef );
					await updateDoc( doc( landingRef, landingId ), {
						blocks: {
							firstSection: {
								leftBlock: docSnapshot.data().blocks.firstSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.firstSection.rightBlock,
							},
							secondSection: {
								leftBlock: docSnapshot.data().blocks.secondSection.leftBlock,
								rightBlock: docSnapshot.data().blocks.secondSection.rightBlock,
							},
							thirdSection: {
								leftBlock: docSnapshot.data().blocks.thirdSection.leftBlock,
								rightBlock: doc( store, `products/${ id }` )
							}
						}
					} );
				}
			}
		}
	} catch ( error )
	{
		return error;
	}
} )

export const getLanding = createAsyncThunk( 'items/getLanding', async () =>
{
	try
	{
		const productsRef = await getDocs( collectionRef );
		const productsData = productsRef.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		const arrayData = await getDocs( landingRef );
		const data = arrayData.docs.map( ( doc ) => doc.data() );
		const firstBanner = productsData.filter( ( product ) => product.id === data[ 0 ]?.banners?.firstBanner?.path?.split( '/' )[ 1 ] );
		const secondBanner = productsData.filter( ( product ) => product.id === data[ 0 ]?.banners?.secondBanner?.path?.split( '/' )[ 1 ] );
		const thirdBanner = productsData.filter( ( product ) => product.id === data[ 0 ]?.banners?.thirdBanner?.path?.split( '/' )[ 1 ] );
		const firstSectionLeftBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.firstSection?.leftBlock?.path?.split( '/' )[ 1 ] );
		const firstSectionRightBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.firstSection?.rightBlock?.path?.split( '/' )[ 1 ] );
		const secondSectionLeftBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.secondSection?.leftBlock?.path?.split( '/' )[ 1 ] );
		const secondSectionRightBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.secondSection?.rightBlock?.path?.split( '/' )[ 1 ] );
		const thirdSectionLeftBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.thirdSection?.leftBlock?.path?.split( '/' )[ 1 ] );
		const thirdSectionRightBlock = productsData.filter( ( product ) => product.id === data[ 0 ]?.blocks?.thirdSection?.rightBlock?.path?.split( '/' )[ 1 ] );
		const landing = {
			banners: {
				firstBanner: firstBanner[ 0 ],
				secondBanner: secondBanner[ 0 ],
				thirdBanner: thirdBanner[ 0 ]
			},
			blocks: {
				firstSection: {
					leftBlock: firstSectionLeftBlock[ 0 ],
					rightBlock: firstSectionRightBlock[ 0 ]
				},
				secondSection: {
					leftBlock: secondSectionLeftBlock[ 0 ],
					rightBlock: secondSectionRightBlock[ 0 ]
				},
				thirdSection: {
					leftBlock: thirdSectionLeftBlock[ 0 ],
					rightBlock: thirdSectionRightBlock[ 0 ]
				}
			}
		};
		return landing;

	} catch ( error )
	{
		return error;
	}
} );

export const addGuest = createAsyncThunk( 'items/addGuest', async () =>
{
	try
	{
		const guest = {
			cart: [],
		};
		localStorage.setItem( 'guest', JSON.stringify( guest ) );
		JSON.parse( localStorage.getItem( 'guest' ) );
	} catch ( error )
	{
		return error;
	}
} );

export const getStore = createAsyncThunk( 'items/getStore', async () =>
{
	try
	{
		const productsRef = await getDocs( collectionRef );
		const productsData = productsRef.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		const arrayData = await getDocs( storeRef );
		const sections = arrayData.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		sections.forEach( ( element ) =>
		{
			element.cards.firstCard = productsData.filter( ( product ) => product.id === element.cards.firstCard.id )[ 0 ];
			element.cards.secondCard = productsData.filter( ( product ) => product.id === element.cards.secondCard.id )[ 0 ];
			element.cards.thirdCard = productsData.filter( ( product ) => product.id === element.cards.thirdCard.id )[ 0 ];
		} );
		return sections;
	} catch ( error )
	{
		return error;
	}
} );

export const getItems = createAsyncThunk( 'items/getItems', async () =>
{
	try
	{
		const arrayData = await getDocs( collectionRef );
		const data = arrayData.docs.map( ( doc ) => ( { ...doc.data(), id: doc.id } ) );
		return data;
	} catch ( error )
	{
		return error;
	}
} )

export const addItem = createAsyncThunk( 'items/addItem', async ( { name, description, company, price } ) =>
{
	try
	{
		const docSnapshot = await addDoc( collectionRef, {
			name: name,
			description: description,
			company: company,
			price: price,
			invertText: false
		} );
		const itemId = docSnapshot.id;
		await updateDoc( doc( utiltiesCollectionRef, 'XHIgATrWMN9jUv54BA8W' ), {
			CreatedItemId: itemId
		} )
		return docSnapshot.id;
	} catch ( error )
	{
		return error;
	}
} );

export const deleteItem = createAsyncThunk( 'items/deleteItem', async ( { docId } ) =>
{
	try
	{
		let docRef;
		if ( docId )
		{
			docRef = doc( store, 'products', docId );
		} else
		{
			docRef = doc( store, 'utilties', 'XHIgATrWMN9jUv54BA8W' );
		}
		const docSnap = await getDoc( docRef );
		const storageRef = ref( storage, '/products' );
		const allFolders = await listAll( storageRef );
		let id = docId ? docSnap.id : docSnap.data().CreatedItemId;
		const previewFileRef = allFolders.items.filter( ( item ) => item.fullPath === `${ item.fullPath.split( '/' )[ 0 ] }/${ id }_${ item.fullPath.split( '_' )[ 1 ] }_${ item.fullPath.split( '_' )[ 2 ] }` );
		const fileRef = allFolders.items.filter( ( item ) => item.fullPath === `${ item.fullPath.split( '/' )[ 0 ] }/${ id }_${ item.fullPath.split( '_' )[ 1 ] }` );
		const previewFilePath = previewFileRef.map( ( file ) => file.fullPath.split( '/' )[ 1 ] );
		const filePath = fileRef.map( ( file ) => file.fullPath.split( '/' )[ 1 ] );
		let urlRef;
		const asyncFilesDelete = async () =>
		{
			await Promise.all( filePath.map( async ( file ) =>
			{
				urlRef = ref( storage, `products/${ file }` );
				return await deleteObject( urlRef );
			} ) );
		};
		const asyncFilesPreviewDelete = async () =>
		{
			await Promise.all( previewFilePath.map( async ( file ) =>
			{
				urlRef = ref( storage, `products/${ file }` );
				return await deleteObject( urlRef );
			} ) );
		};
		await asyncFilesDelete();
		await asyncFilesPreviewDelete();
		if ( docId )
		{
			await deleteDoc( doc( store, 'products', docSnap.id ) );
		} else
		{
			await deleteDoc( doc( store, 'products', docSnap.data().CreatedItemId ) );
		}
	} catch ( error )
	{
		return error
	}
} )

export const addModel = createAsyncThunk( 'items/addModels', async ( { modelName, modelDescription, modelPrice } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			models: arrayUnion( {
				modelName: modelName,
				modelDescription: modelDescription,
				modelPrice: modelPrice
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const addStorage = createAsyncThunk( 'items/addStorages', async ( { storage, storagePrice } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			storages: arrayUnion( {
				storage: storage,
				storagePrice: storagePrice
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const addColors = createAsyncThunk( 'items/addColors', async ( { colorName, colorHex } ) =>
{
	try
	{
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			colors: arrayUnion( {
				colorName: colorName,
				colorHex: colorHex
			} )
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const uploadImages = createAsyncThunk( 'items/uploadImages', async ( { banner, card, block, transparent } ) =>
{
	try
	{
		const bannerRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_banner.jpg` );
		const bannerSnapshot = await uploadBytes( bannerRef, banner );
		const bannerUrl = await getDownloadURL( bannerSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			banner: bannerUrl
		} );
		const cardRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_card.jpg` );
		const cardSnapshot = await uploadBytes( cardRef, card );
		const cardUrl = await getDownloadURL( cardSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			card: cardUrl
		} );
		const blockRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_block.jpg` );
		const blockSnapshot = await uploadBytes( blockRef, block );
		const blockUrl = await getDownloadURL( blockSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			block: blockUrl
		} );
		const transparentRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_transparent.png` );
		const transparentSnapshot = await uploadBytes( transparentRef, transparent );
		const transparentUrl = await getDownloadURL( transparentSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			transparent: transparentUrl
		} );
	} catch ( error )
	{
		return error;
	}
} );

export const UploadPreviews = createAsyncThunk( 'items/uploadPreivews', async ( { preview } ) =>
{

	try
	{
		const previewRef = ref( storage, `products/${ localStorage.getItem( 'itemId' ) }_preview_${ uuid() }.jpg` );
		const previewSnapshot = await uploadBytes( previewRef, preview );
		const previewUrl = await getDownloadURL( previewSnapshot.ref );
		await updateDoc( doc( collectionRef, localStorage.getItem( 'itemId' ) ), {
			previews: arrayUnion( previewUrl )
		} );
	} catch ( error )
	{
		return error;
	}
} )

const itemsSlice = createSlice( {
	name: 'items',
	initialState,
	reducers: {
		addToCart: ( state, action ) =>
		{
			const cart = JSON.parse( localStorage.getItem( 'guest' ) );
			cart.cart.push( action.payload );
			const newCart = JSON.stringify( cart );
			localStorage.setItem( 'guest', newCart );
		}
	},
	extraReducers ( builder )
	{
		builder.addCase( addItem.pending, ( state ) =>
		{
			state.addStatus = 'loading';
		} )
			.addCase( addItem.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addItem.fulfilled, ( state, action ) =>
			{
				state.addStatus = 'success';
				localStorage.removeItem( 'itemId' );
				localStorage.setItem( 'itemId', action.payload );
			} )
			.addCase( addModel.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addModel.rejected, ( state, ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addModel.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( addStorage.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addStorage.rejected, ( state, ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addStorage.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( addColors.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( addColors.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( addColors.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( uploadImages.pending, ( state ) =>
			{
				state.addStatus = 'loading';
			} )
			.addCase( uploadImages.rejected, ( state ) =>
			{
				state.addStatus = 'failed';
			} )
			.addCase( uploadImages.fulfilled, ( state ) =>
			{
				state.addStatus = 'success';
			} )
			.addCase( UploadPreviews.pending, ( state ) =>
			{
				state.uploadPreviewStatus = 'loading';
			} )
			.addCase( UploadPreviews.rejected, ( state ) =>
			{
				state.uploadPreviewStatus = 'failed';
			} )
			.addCase( UploadPreviews.fulfilled, ( state ) =>
			{
				state.uploadPreviewStatus = 'success';
			} )
			.addCase( getItems.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( getItems.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( getItems.fulfilled, ( state, action ) =>
			{
				state.status = 'success';
				state.items = action.payload;
			} )
			.addCase( getStore.pending, ( state ) =>
			{
				state.storeStatus = 'loading';
			} )
			.addCase( getStore.rejected, ( state ) =>
			{
				state.storeStatus = 'failed';
			} )
			.addCase( getStore.fulfilled, ( state, action ) =>
			{
				state.storeStatus = 'success';
				state.store = action.payload;
			} )
			.addCase( getLanding.pending, ( state ) =>
			{
				state.getLandingStatus = 'loading';
			} )
			.addCase( getLanding.rejected, ( state ) =>
			{
				state.getLandingStatus = 'failed';
			} )
			.addCase( getLanding.fulfilled, ( state, action ) =>
			{
				state.getLandingStatus = 'success';
				state.landing = { ...action.payload };
			} )
			.addCase( deleteItem.pending, ( state ) =>
			{
				state.cancelStatus = 'loading';
			} )
			.addCase( deleteItem.rejected, ( state ) =>
			{
				state.cancelStatus = 'failed';
			} )
			.addCase( deleteItem.fulfilled, ( state ) =>
			{
				state.cancelStatus = 'success';
			} )
			.addCase( addGuest.pending, ( state ) =>
			{
				state.status = 'loading';
			} )
			.addCase( addGuest.rejected, ( state ) =>
			{
				state.status = 'failed';
			} )
			.addCase( addGuest.fulfilled, ( state ) =>
			{
				state.status = 'success';
			} )
			.addCase( updateLanding.pending, ( state ) =>
			{
				state.updateLandingStatus = 'loading';
			} )
			.addCase( updateLanding.rejected, ( state ) =>
			{
				state.updateLandingStatus = 'failed';
			} )
			.addCase( updateLanding.fulfilled, ( state ) =>
			{
				state.updateLandingStatus = 'success';
			} )
			.addCase( updateLandingInvertTextColor.pending, ( state ) =>
			{
				state.editStatus = 'loading';
			} )
			.addCase( updateLandingInvertTextColor.rejected, ( state ) =>
			{
				state.editStatus = 'failed';
			} )
			.addCase( updateLandingInvertTextColor.fulfilled, ( state ) =>
			{
				state.editStatus = 'success';
			} )
			.addCase( getItem.pending, ( state ) =>
			{
				state.getItemStatus = 'loading';
			} )
			.addCase( getItem.rejected, ( state ) =>
			{
				state.getItemStatus = 'failed';
			} )
			.addCase( getItem.fulfilled, ( state, action ) =>
			{
				state.item = { ...action.payload };
				state.getItemStatus = 'success';
			} )
			.addCase( addStoreSection.pending, ( state ) =>
			{
				state.addStoreStatus = 'loading';
			} )
			.addCase( addStoreSection.rejected, ( state ) =>
			{
				state.addStoreStatus = 'failed';
			} )
			.addCase( addStoreSection.fulfilled, ( state ) =>
			{
				state.addStoreStatus = 'success';
			} )
			.addCase( deleteStoreSection.pending, ( state ) =>
			{
				state.deleteStoreStatus = 'loading';
			} )
			.addCase( deleteStoreSection.rejected, ( state ) =>
			{
				state.deleteStoreStatus = 'failed';
			} )
			.addCase( deleteStoreSection.fulfilled, ( state ) =>
			{
				state.deleteStoreStatus = 'success';
			} )
	}
} );
export const selectAddStatus = ( state ) => state.items.addStatus;
export const selectCancelStatus = ( state ) => state.items.cancelStatus;
export const selectStatus = ( state ) => state.items.status;
export const selectItems = ( state ) => state.items.items;
export const selectStore = ( state ) => state.items.store;
export const selectLanding = ( state ) => state.items.landing;
export const selectUpdateLandingStatus = ( state ) => state.items.updateLandingStatus;
export const selectUploadPreviewStatus = ( state ) => state.items.uploadPreviewStatus;
export const selectEditStatus = ( state ) => state.items.editStatus;
export const selectGetItemStatus = ( state ) => state.items.getItemStatus;
export const selectItem = ( state ) => state.items.item;
export const selectGetLandingStatus = ( state ) => state.items.getLandingStatus;
export const selectAddStoreStatus = ( state ) => state.items.addStoreStatus;
export const selectDeleteStoreStatus = ( state ) => state.items.deleteStoreStatus;
export const selectStoreStatus = ( state ) => state.items.storeStatus;
export const { addToCart } = itemsSlice.actions;
export default itemsSlice.reducer;